package com1san.cosmeticsApp.dto;

import com1san.cosmeticsApp.domain.CommentEntity;
import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentDto {
    private Long id;

    @NotEmpty
    private String content;

    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public CommentEntity toEntity(){

        CommentEntity commentEntity = CommentEntity.builder()
                .id(id)
                .content(content)
                .createdDate(createdDate)
                .modifiedDate(modifiedDate)
                .build();
        return commentEntity;

    }
    public CommentDto(CommentEntity commentEntity){
        this.id = commentEntity.getId();
        this.content = commentEntity.getContent();
        this.createdDate = commentEntity.getCreatedDate();
        this.modifiedDate = commentEntity.getModifiedDate();
    }
}
