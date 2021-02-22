package com1san.cosmeticsApp.domain;

import com1san.cosmeticsApp.domain.CommentEntity;
import com1san.cosmeticsApp.domain.Member;
import com1san.cosmeticsApp.dto.BoardDto;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Entity
@SuperBuilder
@Table(name = "board")
public class BoardEntity extends TimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "board_id")
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "views")
    private int viewcnt;

    @Column(name = "likes")
    private int like;

    @Column(name = "hot")
    private boolean hot;

    @OneToMany(mappedBy = "boardEntity")
    private List<CommentEntity> comments = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member memberEntity;

    @Enumerated(EnumType.STRING)
    private cosmetics.demo.Domain.Entity.Category category;


    //==연관 관계 편의 메서드==//
    public void setMember(Member member){
        if(this.memberEntity != null){          //기존 연관관계 있을시 제거
            this.memberEntity.getBoards().remove(this);
        }

        this.memberEntity = member;
        member.getBoards().add(this);
    }

    public void setCategory(cosmetics.demo.Domain.Entity.Category category){
        this.category= category;
    }


    public void updateView(int viewcnt){
        this.viewcnt = viewcnt;
    }
    public void updateBoard(BoardDto boardDto){
        this.title = boardDto.getTitle();
        this.content = boardDto.getContent();
        this.hot = boardDto.isHot();
        this.viewcnt = boardDto.getViewcnt();
        this.memberEntity = boardDto.toEntity().getMemberEntity();
        this.updateTime(boardDto.getCreatedDate(), boardDto.getModifiedDate());
    }
}