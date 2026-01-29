docker compose up -d

echo '🟡 - Waiting for database to be ready...'

./wait-for-it.sh "postgresql://karan:thakur@localhost:5432/db_karan" -- echo '🟢 - Database is ready!'

npx prisma migrate dev --name init

npm run test

docker compose down