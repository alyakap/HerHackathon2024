package com.hackyourcareer.hackyourcareer.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hackyourcareer.hackyourcareer.model.enums.Gender;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "location")
    private String location;

    @Column(name = "avatarUrl")
    private String avatarUrl;

    @Column(name = "age")
    private Integer age;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(name = "is_mentor")
    private Boolean isMentor;

    @Column(name = "is_mentee")
    private Boolean isMentee;

    @ManyToMany
    @JoinTable(
            name = "users_preferences",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "preference_id")
    )
    @JsonIgnoreProperties({"users", "id"})
    private Set<Preference> preferencesSet  = new HashSet<>();;

    @ManyToMany
    @JoinTable(
            name = "users_skills",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    @JsonIgnoreProperties({"users", "id"})
    private Set<Skill> skillsSet  = new HashSet<>();;

    @ManyToMany
    @JoinTable(
            name = "users_interests",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "interest_id")
    )
    @JsonIgnoreProperties({"users", "id"})
    private Set<Interest> interestsSet = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "mentors_mentees",
            joinColumns =
                    @JoinColumn(name = "mentor_id"),
            inverseJoinColumns =
                    @JoinColumn(name = "mentee_id")
    )
    @JsonIgnoreProperties({"id", "mentorsSet", "menteesSet", "email", "preferencesSet", "skillsSet", "interestsSet", "personality", "careerPaths", "isMentor", "isMentee", "age"})
    private Set<User> menteesSet = new HashSet<>();

    @ManyToMany(mappedBy = "menteesSet")
    @JsonIgnoreProperties({"id", "mentorsSet", "menteesSet", "email", "preferencesSet", "skillsSet", "interestsSet", "personality", "careerPaths", "isMentor", "isMentee", "age"})
    private Set<User> mentorsSet;

    @ManyToOne()
    @JoinColumn(name = "jobtitle_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"id"})
    private JobTitle jobtitle;

    @ManyToOne()
    @JoinColumn(name = "personality_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"id"})
    private Personality personality;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<CareerPath> careerPaths = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "users_languages",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "language_id")
    )
    @JsonIgnoreProperties({"users", "id"})
    private Set<Language> languagesList = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(username, user.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username);
    }
}
