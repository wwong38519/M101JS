#!/bin/bash

cd week_6_the_aggregation_framework/companies_dataset
mongoimport -d crunchbase -c companies --drop companies.json