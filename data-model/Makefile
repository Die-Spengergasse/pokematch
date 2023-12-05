all: abilities.csv moves.csv types.csv

abilities.csv: raw.csv
	awk -v FS=';' '{print $$6}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@
	insert into Ability (name) values ("Georg");

moves.csv: raw.csv
	awk -v FS=';' '{print $$7}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@

types.csv: raw.csv
	awk -v FS=';' '{print $$8}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@

seed: abilities.csv moves.csv types.csv
	awk '{printf "insert into Ability (name) values (\042%s\042);\n", $$0;}' abilities.csv |   sqlite3 prisma/dev.db
	awk '{printf "insert into Move (name) values (\042%s\042);\n", $$0;}' moves.csv |   sqlite3 prisma/dev.db
	awk '{printf "insert into Type (name) values (\042%s\042);\n", $$0;}' types.csv |   sqlite3 prisma/dev.db
	awk -v FS=';' '{printf "insert into pokemon (name, height, weight, baseExp) values (\042%s\042, %s, %s, %s);\n", $$2, $$3, $$4, $$5;}' raw.csv |   sqlite3 prisma/dev.db