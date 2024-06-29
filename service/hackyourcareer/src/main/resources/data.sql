INSERT INTO preferences(id, name)
VALUES
('P001','flexible hours'),
('P002','remote work'),
('P003','team collaboration'),
('P004','professional development'),
('P005','work-life balance'),
('P006','competitive salary'),
('P007','health benefits'),
('P008','paid time off'),
('P009','career growth'),
('P010','company culture'),
('P011','training opportunities'),
('P012','mentoring programs'),
('P013','performance feedback'),
('P014','innovation focus'),
('P015','workplace diversity'),
('P016','social responsibility'),
('P017','recognition programs'),
('P018','workplace wellness'),
('P019','employee engagement'),
('P020','technology advancement');

INSERT INTO personalities(id,name,description)
VALUES
('ISTJ','The Inspector','Reserved and practical, they tend to be loyal, orderly, and traditional.'),
('ISTP','The Crafter','Highly independent, they enjoy new experiences that provide first-hand learning.'),
('ISFJ','The Protector','Warm-hearted and dedicated, they are always ready to protect the people they care about.'),
('ISFP','The Artist','Easy-going and flexible, they tend to be reserved and artistic.'),
('INFJ','The Advocate','Creative and analytical, they are considered one of the rarest Myers-Briggs types.'),
('INFP','The Mediator','Idealistic with high values, they strive to make the world a better place.'),
('INTJ','The Architect','High logical, they are both very creative and analytical.'),
('INTP','The Thinker','Quiet and introverted, they are known for having a rich inner world.'),
('ESTP','The Persuader','Out-going and dramatic, they enjoy spending time with others and focusing on the here-and-now.'),
('ESTJ','The Director','Assertive and rule-oriented, they have high principles and a tendency to take charge.'),
('ESFP','The Performer','Outgoing and spontaneous, they enjoy taking center stage.'),
('ESFJ','The Caregiver','Soft-hearted and outgoing, they tend to believe the best about other people.'),
('ENFP','The Champion','Charismatic and energetic, they enjoy situations where they can put their creativity to work.'),
('ENFJ','The Giver','Loyal and sensitive, they are known for being understanding and generous.'),
('ENTP','The Debater','Highly inventive, they love being surrounded by ideas and tend to start many projects (but may struggle to finish them).'),
('ENTJ','The Commander','Outspoken and confident, they are great at making plans and organizing projects.');

INSERT INTO skills(id, name)
VALUES
('S001','Java'),
('S002','Python'),
('S003','SQL'),
('S004','JavaScript'),
('S005','C++'),
('S006','HTML'),
('S007','CSS'),
('S008','Ruby'),
('S009','PHP'),
('S010','Swift'),
('S011','C#'),
('S012','React'),
('S013','Angular'),
('S014','Node.js'),
('S015','MongoDB'),
('S016','AWS'),
('S017','Docker'),
('S018','Kubernetes'),
('S019','Git'),
('S020','Jenkins'),
('S021','Linux'),
('S022','Windows Server'),
('S023','Networking'),
('S024','Cybersecurity'),
('S025','Agile Methodologies'),
('S026','Scrum'),
('S027','DevOps'),
('S028','Machine Learning'),
('S029','Artificial Intelligence'),
('S030','Big Data'),
('S031','Data Analytics'),
('S032','IoT'),
('S033','Blockchain'),
('S034','Cloud Computing'),
('S035','Mobile Development'),
('S036','Web Development'),
('S037','Database Management'),
('S038','UI/UX Design'),
('S039','Quality Assurance'),
('S040','Project Management'),
('S041','ITIL'),
('S042','IT Service Management'),
('S043','Virtualization'),
('S044','Shell Scripting'),
('S045','Automation'),
('S046','Troubleshooting'),
('S047','Technical Support'),
('S048','System Administration'),
('S049','Software Development'),
('S050','Programming'),
('S051','Testing'),
('S052','Documentation'),
('S053','Deployment'),
('S054','Integration'),
('S055','APIs'),
('S056','Microservices'),
('S057','Containers');

INSERT INTO interests(id, name)
VALUES
('I001','Reading industry-related articles'),
('I002','Attending networking events'),
('I003','Taking online courses'),
('I004','Participating in webinars'),
('I005','Joining professional organizations'),
('I006','Mentoring junior colleagues'),
('I007','Attending conferences'),
('I008','Volunteering for projects'),
('I009','Developing new skills'),
('I010','Building a personal brand'),
('I011','Collaborating with cross-functional teams'),
('I012','Leading team meetings'),
('I013','Participating in hackathons'),
('I014','Contributing to open-source projects'),
('I015','Engaging in thought leadership'),
('I016','Attending workshops'),
('I017','Staying updated on industry trends'),
('I018','Networking on social media'),
('I019','Creating a personal blog'),
('I020','Giving presentations'),
('I021','Participating in panel discussions'),
('I022','Attending trade shows'),
('I023','Engaging in continuous learning'),
('I024','Building a professional network'),
('I025','Participating in industry forums'),
('I026','Taking on challenging projects'),
('I027','Seeking feedback from peers'),
('I028','Attending career fairs'),
('I029','Participating in job shadowing');

INSERT INTO jobtitles(id, name)
VALUES
('J001','Systems Administrator'),
('J002','Network Engineer'),
('J003','IT Support Specialist'),
('J004','Database Administrator'),
('J005','Cybersecurity Analyst'),
('J006','Software Engineer'),
('J007','Data Analyst'),
('J008','Product Manager'),
('J009','Network Administrator'),
('J010','Web Developer'),
('J011','Systems Analyst'),
('J012','UX/UI Designer'),
('J013','DevOps Engineer'),
('J014','Business Analyst'),
('J015','QA Engineer'),
('J016','Cloud Architect'),
('J017','Technical Lead'),
('J018','IT Consultant'),
('J019','Machine Learning Engineer'),
('J020','Full Stack Developer'),
('J021','AI Specialist'),
('J022','Project Manager');

INSERT INTO careerpaths (id, jobtitle_id, start_date, end_date, rating, company)
VALUES ('CP001', 'J003', '2022-01-01', '2023-01-01', 5, 'TechCorp');

INSERT INTO users (id, username, email, firstname, lastname, age, gender, is_mentor, is_mentee, jobtitle_id, personality_id, career_path_id)
VALUES ('1', 'mentor1', 'email', '', '', 43, 'FEMALE', true, false, 'J003', 'ESTP', 'CP001');

INSERT INTO users (id, username)
VALUES ('2', 'mentee1');

INSERT INTO users (id, username)
VALUES ('3', 'mentee2');

INSERT INTO mentors_mentees (mentor_id, mentee_id)
VALUES ('1', '2');

INSERT INTO mentors_mentees (mentor_id, mentee_id)
VALUES ('1', '3');

INSERT INTO users_preferences (user_id, preference_id)
VALUES ('1', 'P013'),
('1', 'P014'),
('1', 'P015');

INSERT INTO users_interests (user_id, interest_id)
VALUES ('1', 'I001'),
('1', 'I010'),
('1', 'I015');

INSERT INTO users_skills (user_id, skill_id)
VALUES ('1', 'S011'),
('1', 'S013'),
('1', 'S016');

