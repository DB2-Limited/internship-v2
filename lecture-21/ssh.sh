#!/bin/zsh

ssh -i "~/.ssh/awskey.pem" ubuntu@ec2-52-28-33-105.eu-central-1.compute.amazonaws.com

#scp -i "~/.ssh/awskey.pem" ./setup_node.sh ubuntu@ec2-52-28-33-105.eu-central-1.compute.amazonaws.com:/home/ubuntu