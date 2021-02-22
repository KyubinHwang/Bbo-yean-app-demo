package com1san.cosmeticsApp.dto;

import com1san.cosmeticsApp.domain.Member;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberDto {

    private Long id;
    private String name;
    private String password;
    private String nickname;

    public MemberDto(Member memberEntity){
        this.id = memberEntity.getId();
        this.name = memberEntity.getName();
        this.password = memberEntity.getPassword();
        this.nickname = memberEntity.getNickname();
//        this.comments = memberEntity.getComments().stream()
//                .map( commentEntity -> new CommentDto(commentEntity))
//                .collect(Collectors.toList());
//        this.boards = memberEntity.getBoards().stream()
//                .map(boardEntity -> new BoardDto(boardEntity))
//                .collect(Collectors.toList());
    }

}
