package com1san.cosmeticsApp.service;

import com1san.cosmeticsApp.domain.BoardEntity;
import com1san.cosmeticsApp.domain.CommentEntity;
import com1san.cosmeticsApp.domain.Member;
import com1san.cosmeticsApp.dto.CommentDto;
import com1san.cosmeticsApp.repository.BoardRepository;
import com1san.cosmeticsApp.repository.CommentRepository;
import com1san.cosmeticsApp.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;

    //==댓글 조회==//
    public List<CommentDto> CommentsAll(Long boardId, Pageable pageable){
        List<CommentEntity> comments = commentRepository.findCommentEntityByBoardEntity_Id(boardId, pageable).getContent();

        List<CommentDto> commentsDto = new ArrayList<>();

        comments.stream().forEach(commentEntity -> commentsDto.add(new CommentDto(commentEntity)));

        return commentsDto;
    }

    //==댓글 추가==//
    @Transactional
    public CommentDto addComment(Long memberId, Long boardId, CommentDto commentDto){
        Member findMember = memberRepository.findOne(memberId);
        Optional<BoardEntity> optional = boardRepository.findById(boardId);
        BoardEntity findBoard = optional.get();

        //연관 짓기
        CommentEntity comment = CommentEntity.createComment(findBoard, findMember, commentDto);
        commentRepository.save(comment);

        return new CommentDto(comment);
    }

    //==댓글 삭제==//
    @Transactional
    public void deleteComment(Long id){
        commentRepository.deleteById(id);
    }

    //==댓글 수정==//
    @Transactional
    public CommentDto updateComment(Long id, CommentDto commentDto){
        Optional<CommentEntity> comment = commentRepository.findById(id);
        CommentEntity commentEntity = comment.get();

        CommentEntity.builder()
                .id(commentDto.getId())
                .boardEntity(commentDto.toEntity().getBoardEntity())
                .memberEntity(commentDto.toEntity().getMemberEntity())
                .content(commentDto.getContent())
                .modifiedDate(commentDto.getModifiedDate())
                .build();

        return new CommentDto(commentEntity);
    }

}
