package com.hackyourcareer.hackyourcareer.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "languages")
@Getter
@Setter
@NoArgsConstructor
public class Language {
    @Id
    @Column(name = "id")
    String id;

    @Column(name = "name")
    String name;
}
