all: abilities.csv moves.csv types.csv

abilities.csv: urxn.csv
	awk -v FS=';' '{print $$6}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@

moves.csv: urxn.csv
	awk -v FS=';' '{print $$7}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@

types.csv: urxn.csv
	awk -v FS=';' '{print $$8}' $^  | awk -v FS='|' '{for (i=1;i<=NF;i++){print $$i}}' | sort -u > $@