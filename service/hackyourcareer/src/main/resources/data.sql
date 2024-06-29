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
('J022','Project Manager'),
('J023','University Graduate');

INSERT INTO languages (id, name)
VALUES
('L001','English'),
('L002','German'),
('L003','French');

INSERT INTO users (id, username, email, firstname, lastname, age, gender, is_mentor, is_mentee, jobtitle_id, personality_id, location, avatar_url)
VALUES ('1', 'mentee1', 'email@email.com', 'Anna', 'Melson', 33, 'FEMALE', false, true, 'J022', 'ESTP', 'USA', 'https://earthlab.colorado.edu/sites/default/files/media/image/Ada_Lovelace_Chalon_portrait.jpg');

INSERT INTO careerpaths (id, jobtitle_id, start_date, end_date, rating, company, user_id)
VALUES ('CP001', 'J023', '2019-10-01', '2024-05-01', 5, 'MIT', '1');

INSERT INTO users (id, username, email, firstname, lastname, age, gender, is_mentor, is_mentee, jobtitle_id, personality_id, location, avatar_url)
VALUES ('2', 'mentor1', 'email@email.com', 'Ada', 'Lovelace', 43, 'FEMALE', true, false, 'J002', 'ENFJ', 'Frankfurt, Germany', 'https://mim.p7s1.io/pis/ld/c97ezChLCVyZ-c1vEwXZAanB-DJ78rnq2V2gRWTHzVV6NywNWMSJCEGmZ4YSENP-WRL0b9lo2z_IfR_W_NB3xHAXlZaTzYAhOvOGK9Bc53VQ3BsxRJ3t03eXpLyoTK22rB5pwWWZr68/profile:original?rect=224%2C0%2C576%2C576&w=400');

INSERT INTO careerpaths (id, jobtitle_id, start_date, end_date, rating, company, user_id)
VALUES ('CP002', 'J002', '2018-09-01', '2024-07-01', 5, 'Wonderful technologies', '2');

INSERT INTO careerpaths (id, jobtitle_id, start_date, end_date, rating, company, user_id)
VALUES ('CP003', 'J007', '2008-01-01', '2018-08-01', 5, 'Wow', '2');

INSERT INTO users (id, username, email, firstname, lastname, age, gender, is_mentor, is_mentee, jobtitle_id, personality_id, location, avatar_url)
VALUES ('3', 'mentor2', 'email@email.com', 'Hedy', 'Lamarr', 33, 'FEMALE', true, false, 'J002', 'ESTP', 'Frankfurt, Germany', 'https://www.physics.wisc.edu/wp-content/uploads/2021/12/Mae-Saul-profile-400x400.jpg');

INSERT INTO careerpaths (id, jobtitle_id, start_date, end_date, rating, company, user_id)
VALUES ('CP004', 'J002', '2018-09-01', '2024-07-01', 5, 'Wonderful technologies', '3');

INSERT INTO careerpaths (id, jobtitle_id, start_date, end_date, rating, company, user_id)
VALUES ('CP005', 'J007', '2008-01-01', '2018-08-01', 5, 'Wow', '3');

INSERT INTO mentors_mentees (mentor_id, mentee_id)
VALUES ('2', '1');

INSERT INTO mentors_mentees (mentor_id, mentee_id)
VALUES ('3', '1');

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

INSERT INTO users_languages (user_id, language_id)
VALUES ('1', 'L001'),
('1', 'L002'),
('1', 'L003');

