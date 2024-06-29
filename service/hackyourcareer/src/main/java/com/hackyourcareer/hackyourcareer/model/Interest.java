package com.hackyourcareer.hackyourcareer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "interests")
@Getter
@Setter
@NoArgsConstructor
public class Interest {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;
}
