#!/usr/bin/env bash
BASEDIR=$(dirname $0)
sudo python -m http.server 80 -d ${BASEDIR}/src
