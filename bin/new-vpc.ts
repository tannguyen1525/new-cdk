#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NewVpcStack } from '../lib/new-vpc-stack';

const app = new cdk.App();
new NewVpcStack(app, 'NewVpcStack')
app.synth();