package com.hackyourcareer.hackyourcareer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "preferences")
@Getter
@Setter
@NoArgsConstructor
public class Preference {
    @Id
    @Column(name = "id")
    String id;

    @Column(name = "name")
    String name;
}
