### mongodb 자동 백업 (aws-cli 이용하여 s3에 백업)

  밑에 문자열 검색하기 구글에...
```
#!/bin/sh

# Make sure to:
# 1) Name this file `backup.sh` and place it in /home/ubuntu
# 2) Run sudo apt-get install awscli to install the AWSCLI
# 3) Run aws configure (enter s3-authorized IAM user and specify region)
# 4) Fill in DB host + name
# 5) Create S3 bucket for the backups and fill it in below (set a lifecycle rule to expire files older than X days in the bucket)
# 6) Run chmod +x backup.sh
# 7) Test it out via ./backup.sh
# 8) Set up a daily backup at midnight via `crontab -e`:
#    0 0 * * * /home/ubuntu/backup.sh > /home/ubuntu/backup.log

# DB host (secondary preferred as to avoid impacting primary performance)
HOST=IP

# DB name
DBNAME=db-name

# S3 bucket name
BUCKET=bucker-name
```
