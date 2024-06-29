package com.hackyourcareer.hackyourcareer.model;

import com.hackyourcareer.hackyourcareer.model.enums.Gender;
//import com.hackyourcareer.hackyourcareer.model.enums.Personality;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.prefs.Preferences;

import static jakarta.persistence.CascadeType.ALL;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "username")
    String username;

    @Column(name = "email")
    String email;

    @Column(name = "firstname")
    String firstname;

    @Column(name = "lastname")
    String lastname;

    @Column(name = "age")
    Integer age;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    Gender gender;

    @Column(name = "preferences")
    @OneToMany(targetEntity=Preference.class, cascade=ALL, mappedBy="id", fetch=FetchType.LAZY)
    Set<Preference> preferencesSet;

    @Column(name = "skills")
    @OneToMany(targetEntity=Skill.class, cascade=ALL, mappedBy="id", fetch=FetchType.LAZY)
    Set<Skill> skillsSet;

    @Column(name = "interests")
    @OneToMany(targetEntity=Interest.class, cascade=ALL, mappedBy="id", fetch=FetchType.LAZY)
    Set<Interest> interestsSet;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "mentor_id", referencedColumnName = "id")
    User mentor;

    @OneToMany
    Set<User> menteeSet;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "jobtitle_id", referencedColumnName = "id")
    JobTitle jobtitle;

//    @Column(name = "personality")
//    Personality personality;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "careerPath_id", referencedColumnName = "id")
    CareerPath careerPath;
}
