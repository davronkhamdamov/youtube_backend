CREATE TABLE users (
	id varchar(50) NOT NULL DEFAULT gen_random_uuid(),
	name varchar(50) NOT NULL UNIQUE,
	password varchar(50) NOT NULL,
	img_url varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY (id)
);


CREATE TABLE videos (
	id varchar(255) NOT NULL DEFAULT gen_random_uuid(),
	user_id varchar(255) NOT NULL,
	name varchar(255) NOT NULL,
	video_title varchar(255) NOT NULL,
	video_size varchar(255) NOT NULL,
	upload_date varchar(255) NOT NULL DEFAULT now(),
	CONSTRAINT "videos_pk" PRIMARY KEY (id)
);


ALTER TABLE videos ADD CONSTRAINT "videos_fk0" FOREIGN KEY (user_id) REFERENCES users(id);


