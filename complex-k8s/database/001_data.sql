CREATE TABLE facts (
   fact_id   NUMERIC       NOT NULL,
   fact_content    VARCHAR(1000) NOT NULL,
   CONSTRAINT facts_pk PRIMARY KEY (fact_id)
);

INSERT INTO facts (fact_id, fact_content)
VALUES
(1, 'DevOps, the Dev is silent'),
(2, 'If it hurts, do it more often'),
(3, 'Adding manpower to a late software project makes it later!'),
(4, 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'),
(5, 'Any fool can write code that a unicorn can understand. Good programmers write code that humans can understand.'),
(6, 'Premature optimization is the root of all evil.'),
(7, 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'),
(8, 'If you join forces with the unicorns, you will gain a powerful ally.');
