package com1san.cosmeticsApp.domain;

import com1san.cosmeticsApp.dto.CommentDto;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@SuperBuilder
@Table(name = "comment")
public class CommentEntity extends TimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member memberEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private BoardEntity boardEntity;

    /* 연곤 관계 편의메서드 */
    public void setMember(Member member){

        this.memberEntity = member;
        member.getComments().add(this);
    }

    public void setBoard (BoardEntity board){
        this.boardEntity = board;
        board.getComments().add(this);
    }

    /* 정적 팩토리 */
    public static CommentEntity createComment(BoardEntity board, Member member, CommentDto commentDto){

        CommentEntity comment = commentDto.toEntity();

        comment.setMember(member);
        comment.setBoard(board);

        return comment;
    }
}
