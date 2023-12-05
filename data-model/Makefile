all: abilities.csv moves.csv types.csv

abilities.csv: raw.csv
	awk -v FS=';' '{print $$6}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@
	insert into Ability (name) values ("Georg");

moves.csv: raw.csv
	awk -v FS=';' '{print $$7}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@

types.csv: raw.csv
	awk -v FS=';' '{print $$8}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@
