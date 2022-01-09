CREATE TABLE "checklist" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(255) ,
    "completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "checklist"
("task")
VALUES
('mop kitchen'),
('dust livingroom'),
('water plants'),
('order face masks');