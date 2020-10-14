
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--Create a database called "letterpals"

--Creating user table
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR ,
    "avatar" VARCHAR ,
    "about" VARCHAR,
    "address" VARCHAR
);
-- DROP TABLE "user";

--creating letter table
CREATE TABLE "letter"
(
    "id" SERIAL PRIMARY KEY,
    "from_id" INT REFERENCES "user",
    "to_id" INT REFERENCES "user",
    "postmark" DATE,
    "recieved" BOOLEAN
);
-- DROP TABLE "letters";

--creating pal table
CREATE TYPE "pal_status" AS ENUM
('PENDING', 'ACCEPTED', 'REJECTED');

CREATE TABLE "pal"
(
    "id" SERIAL PRIMARY KEY,
    "pal1_id" INT REFERENCES "user",
    "pal2_id" INT REFERENCES "user",
    "status" "pal_status" DEFAULT 'PENDING'

);
-- DROP TABLE "pals";

--AXIOS QUERIES
--creating pal list for main app view
-- SELECT "pal"."id" AS "friendship_id",
--     "pal1"."id" AS "pal1_id",
--     "pal2"."id"AS "pal2_id",
--     "pal1"."name" AS "pal1_username",
--     "pal2"."name" AS "pal2_username"

-- FROM "pal" AS "pal"
--     JOIN "user" "pal1" ON "pal1"."id"="pal"."pal1_id"
--     JOIN "user" "pal2" ON "pal2"."id"="pal"."pal2_id"
-- WHERE "pal1_id"=1 OR "pal2_id"=1;

-- UPDATE "user" 
--   SET "name" = COALESCE( $1 , "name"),
--     "avatar" = COALESCE( $2 , "avatar"),
--     "about" = COALESCE( $3 , "about"),
--     "address" = COALESCE( $4 , "address")
--   WHERE "id"=$5;