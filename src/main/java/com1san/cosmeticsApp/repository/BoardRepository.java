package com1san.cosmeticsApp.repository;

import com1san.cosmeticsApp.domain.BoardEntity;
import cosmetics.demo.Domain.Entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
    Page<BoardEntity> findByTitleContaining(String keyword, Pageable pageable);
    Page<BoardEntity> findBoardEntitiesByCategory(Category category, Pageable pageable);
    List<BoardEntity> findByMemberEntityId(Long memberId);
    Page<BoardEntity> findBoardEntitiesByCategoryAndTitleContaining(String keyword, Category category, Pageable pageable);
}