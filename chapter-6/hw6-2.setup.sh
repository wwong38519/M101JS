#!/bin/bash

cd week_6_the_aggregation_framework/grades/
mongoimport -d test -c grades --drop grades.json
