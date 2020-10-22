--Create a database called "letterpals"

--Creating user table
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR NOT NULL,
    "avatar" VARCHAR DEFAULT 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
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
    "received" BOOLEAN DEFAULT FALSE
);
-- DROP TABLE "letter";

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
-- DROP TABLE "pal";

--Here is some dummy data for testing purposes!


INSERT INTO "user"
    ("username", "password", "name", "avatar", "about", "address")
VALUES
    ('mouse', '$2a$10$bq18jJhQhp1w8tzjxdfOTe5Aj/EzIManOYP1IxgI2vaXqAX7tfWJa', 'Michael Mouse', 'https://www.karwansaraypublishers.com/schrijfsels/wp-content/uploads/2017/05/mouse-e1495729600386.jpg', 'Raven maven. Student. Unapologetic beer fan. Hipster-friendly tv specialist. My spirit animal is that chicken who keeps crossing the road for reasons no one can figure', '3421  Public Works Drive, Minneapolis, MN 55830'),
    ('cat', '$2a$10$32fqeD0n/kELLPak79mPeu2s7NAs4VOvD9VHhlOdi0UwCRpFwJQHi', 'Chloe Cat', 'https://pbs.twimg.com/media/DQ70jMlWkAEnTpR?format=jpg&name=medium', 'Hipster-friendly novel fan. Subtly charming internet specialist. Student. Passionate coffee guru. Zombieaholic. Tv lover. Falls down a lot. Most murder victims are killed by someone they know. So stay safe by living a life of heartbreaking solitude, devoid of human contact.', '3536  Glendale Avenue, Woodland Hills, CA 91303'),
    ('frog', '$2a$10$t2aBiz1kqKX0zyW5RgTJHOie15CGXxkKXxqylPCyTmD/zTmFVH03i', 'Frederick Frog', 'https://i.pinimg.com/originals/f8/ea/f0/f8eaf0e1927dcc503c24098e267e0eb2.jpg', 'Future teen idol. Organizer. Certified entrepreneur. Incurable web scholar. Troublemaker. Explorer. Bacon practitioner. Analyst. I must love my work...I love to sit and stare at it for hours....thats love right????', '747  Lauren Drive, Madison, WI 53705'),
    ('dog', '$2a$10$dcAehedQun3/XkY9yno4Lumm4ipiR7w3foLOMXPGZ..lnFZcnmgEK', 'Donna Dog', 'https://williammorristile.com/medieval/bestiary_dogs/medieval_dog_attendant.jpg', 'Twitter buff. Introvert. Beer lover. Web advocate. Professional pop culture evangelist. If God sneezed, what would you say to him?', '2725  Levy Court, Springfield, MA 01109'),
    ('owl', '$2a$10$J978BnW/xYEq73JKwqsZfu9iJ294vDyXXpNKoaIwRBeNFGWvz1pdi', 'Oliver Owl', 'https://i.imgur.com/z4Va7Rn.jpg', 'Total coffee fan. Evil tv aficionado. Introvert. Gamer. Amateur writer. Extreme pop culture evangelist. Infuriatingly humble analyst. If you want a vision of the future, imagine a boot stamping on a human face - forever.', '1816  Rogers Street, Savage, MT 59262');

INSERT INTO "pal"
    ("pal1_id", "pal2_id", "status")
VALUES
    (4, 5, 'ACCEPTED'),
    (3, 4, 'ACCEPTED'),
    (5, 3, 'PENDING'),
    (2, 4, 'ACCEPTED'),
    (3, 1, 'ACCEPTED'),
    (5, 1, 'ACCEPTED'),
    (1, 4, 'PENDING'),
    (2, 5, 'PENDING');

INSERT INTO "letter"
    ("from_id", "to_id", "postmark", "received")
VALUES
    (4, 3, '2020-10-08', TRUE),
    (4, 2, '2020-10-06'. TRUE),
    (3, 4, '2020-10-24', FALSE),
    (1, 5, '2020-09-16', TRUE),
    (4, 5, '2020-10-18', FALSE),
    (5, 1, '2020-10-01', TRUE),
    (5, 4, '2020-10-20', FALSE),
    (3, 4, '2020-10-22', FALSE);