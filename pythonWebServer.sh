#! /bin/bash
BASEDIR=$(dirname $0)
sudo python3 -m http.server 80 -d ${BASEDIR}/src
