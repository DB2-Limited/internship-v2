# Lecture 21

## AWS EC2. Security Groups. Nginx

### EC2

Amazon Elastic Compute Cloud (EC2) is a part of Amazon cloud-computing platform, Amazon Web Services (AWS), that allows
users to rent virtual machines for any user purpose. EC2 encourages scalable deployment of applications by providing a
web service through which a user can boot an Amazon Machine Image (AMI) to configure a virtual machine, which Amazon
calls an "instance", containing any software desired.

#### VPC

Amazon VPC is the networking layer for Amazon EC2. 

The following are the key concepts for VPCs:

- Virtual private cloud (VPC) — A virtual network dedicated to your AWS account.
- Subnet — A range of IP addresses in your VPC.
- Route table — A set of rules, called routes, that are used to determine where network traffic is directed.
- Internet gateway — A gateway that you attach to your VPC to enable communication between resources in your VPC and the
internet.

- VPC endpoint — Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by
PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.
Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between
your VPC and the other service does not leave the Amazon network. For more information, see AWS PrivateLink and VPC
endpoints.

- CIDR block —Classless Inter-Domain Routing. An internet protocol address allocation and route aggregation methodology.

### Nginx

Install:

```
sudo apt install nginx
```

Place a config `<appname>.conf` in `/etc/nginx/conf.d/` directory.

Config example:

```
server {
        listen 80;
        server_name 52.59.192.193;
        location / {
          proxy_pass http://0.0.0.0:3000/;
        }
}
```

### systemd

To run app as a background process we can use systemd. Place a config file `<appname>.service` in
the `/etc/systemd/system` directory.

Start a service:

```
systemctl start <appname>
```

Check status:

```
systemctl status <appname>
```

Reload config after changes, if any:

```
systemctl daemon-reload
```

Config example:

```
[Unit]
Description=nodeapp

[Service]
WorkingDirectory=/home/ubuntu/nodeapp
User=ubuntu
Group=ubuntu
ExecStart=/home/ubuntu/.nvm/versions/node/v16.0.0/bin/node app.js
Restart=always
```