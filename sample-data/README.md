# Sample Database

## Import the sample data
Import `dvdrental.tar` to your postgres database.
Source: https://www.postgresqltutorial.com/postgresql-sample-database/

## Docker script to startup postgres
```
───────┬──────────────────────────────────────────────────────────────────
       │ File: startupDVDRental.sh
───────┼──────────────────────────────────────────────────────────────────
   1   │ docker run -d \
   2   │     --name postgres-dvdrental \
   3   │     -e POSTGRES_DB=dvdrental_local \
   4   │     -e POSTGRES_USER=postgres \
   5   │     -e POSTGRES_PASSWORD=secret \
   6   │     -v $PWD/dvdrental/data:/var/lib/postgresql/data \
   7   │     -p 5432:5432 \
   8   │     postgres:12.6
───────┴──────────────────────────────────────────────────────────────────
```
## Docker script to shutdown postgres
```
───────┬──────────────────────────────────────────────────────────────────
       │ File: shutdownDVDRental.sh
───────┼──────────────────────────────────────────────────────────────────
   1   │ docker stop postgres-dvdrental && docker rm postgres-dvdrental
───────┴──────────────────────────────────────────────────────────────────
```
## Docker script to startup pgAdmin
```
───────┬─────────────────────────────────────────────────────
       │ File: startupPGAdmin.sh
───────┼─────────────────────────────────────────────────────
   1   │ docker run --name pgadmin -p 5050:80 \
   2   │     -v $PWD/data:/var/lib/pgadmin \
   3   │     -e "PGADMIN_DEFAULT_EMAIL=admin@domain.com" \
   4   │     -e "PGADMIN_DEFAULT_PASSWORD=secret" \
   5   │     -d dpage/pgadmin4
───────┴─────────────────────────────────────────────────────
```
## Docker script to shutdown pgAdmin
```
───────┬─────────────────────────────────────────────────────
       │ File: shutdownPGAdmin.sh
───────┼─────────────────────────────────────────────────────
   1   │ docker stop pgadmin && docker rm pgadmin
───────┴─────────────────────────────────────────────────────
```