package com.hackyourcareer.hackyourcareer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "careerpaths")
@Getter
@Setter
@NoArgsConstructor
public class CareerPath {

    @Id
    @Column(name = "id")
    private String id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "jobtitle_id", referencedColumnName = "id")
    private JobTitle jobTitle;

    @Column(name = "startDate")
    private LocalDate startDate;

    @Column(name = "endDate")
    private LocalDate endDate;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "company")
    private String company;
}
