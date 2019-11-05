CREATE TABLE facts (
   fact_id   NUMERIC       NOT NULL,
   fact_content    VARCHAR(1000) NOT NULL,
   CONSTRAINT facts_pk PRIMARY KEY (fact_id)
);

INSERT INTO facts (fact_id, fact_content)
VALUES
(1, '"DevOps". The "Dev" is silent'),
(2, 'If it hurts, do it more often'),
(3, 'Adding manpower to a late software project makes it later!'),
(4, 'DevOps is not a goal, but a never-ending process of continual improvement'),
(5, 'Any fool can write code that a unicorn can understand. Good programmers write code that humans can understand.'),
(6, 'Premature optimization is the root of all evil.'),
(7, 'If you think it’s expensive to hire a professional, wait until you hire an amateur.'),
(8, 'If you join forces with the unicorns, you will gain a powerful ally.'),
(9, '*Bork Bork*...I mean *making unicorn noises*'),
(10, 'The most powerful tool we have as developers is automation.'),
(11, 'You build it, you run it.'),
(12, 'Worked fine in dev. Ops problem now.'),
(13, 'I find your lack of DevOps disturbing.'),
(14, 'Not sure if DevOps is helping my business or automating me out of a job...'),
(15, 'With Docker, say goodbye to "Works on my computer". Say hello to "Works in my container".');
