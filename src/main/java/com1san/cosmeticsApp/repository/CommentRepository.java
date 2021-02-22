package com1san.cosmeticsApp.repository;

import com1san.cosmeticsApp.domain.CommentEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
    List<CommentEntity> findAllByMemberEntityId(Long id);
    Page<CommentEntity> findCommentEntityByBoardEntity_Id(Long boardId, Pageable pageable);
}
