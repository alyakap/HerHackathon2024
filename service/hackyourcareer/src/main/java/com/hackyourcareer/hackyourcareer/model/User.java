package com.hackyourcareer.hackyourcareer.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hackyourcareer.hackyourcareer.model.enums.Gender;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@Entity
@Table(name = "users")
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
    @JsonIgnore
//    @JsonIgnoreProperties({"id", "mentorsSet", "menteesSet", "email", "preferencesSet", "skillsSet", "interestsSet", "personality", "careerPaths", "isMentor", "isMentee", "age"})
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
    @JsonIgnoreProperties({ "id"})
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Boolean getMentor() {
        return isMentor;
    }

    public void setMentor(Boolean mentor) {
        isMentor = mentor;
    }

    public Boolean getMentee() {
        return isMentee;
    }

    public void setMentee(Boolean mentee) {
        isMentee = mentee;
    }

    public Set<Preference> getPreferencesSet() {
        return preferencesSet;
    }

    public void setPreferencesSet(Set<Preference> preferencesSet) {
        this.preferencesSet = preferencesSet;
    }

    public Set<Skill> getSkillsSet() {
        return skillsSet;
    }

    public void setSkillsSet(Set<Skill> skillsSet) {
        this.skillsSet = skillsSet;
    }

    public Set<Interest> getInterestsSet() {
        return interestsSet;
    }

    public void setInterestsSet(Set<Interest> interestsSet) {
        this.interestsSet = interestsSet;
    }

    public Set<User> getMenteesSet() {
        return menteesSet;
    }

    public void setMenteesSet(Set<User> menteesSet) {
        this.menteesSet = menteesSet;
    }

    public Set<User> getMentorsSet() {
        return mentorsSet;
    }

    public void setMentorsSet(Set<User> mentorsSet) {
        this.mentorsSet = mentorsSet;
    }

    public JobTitle getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(JobTitle jobtitle) {
        this.jobtitle = jobtitle;
    }

    public Personality getPersonality() {
        return personality;
    }

    public void setPersonality(Personality personality) {
        this.personality = personality;
    }

    public Set<CareerPath> getCareerPaths() {
        return careerPaths;
    }

    public void setCareerPaths(Set<CareerPath> careerPaths) {
        this.careerPaths = careerPaths;
    }

    public Set<Language> getLanguagesList() {
        return languagesList;
    }

    public void setLanguagesList(Set<Language> languagesList) {
        this.languagesList = languagesList;
    }
}
