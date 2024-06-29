package com.hackyourcareer.hackyourcareer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "jobtitles")
@Getter
@Setter
@NoArgsConstructor
public class JobTitle {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;
}
