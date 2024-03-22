import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { SettingsTabs } from '@/components/components/SettingsTabs'
import * as Input from '@/components/components/Input'
import * as FileInput from '@/components/components/Form/FileInput'
import { Select } from '@/components/components/Form/Select'
import { SelectItem } from '@/components/components/Form/Select/SelectItem'
import { Textarea } from '@/components/components/Form/Textarea'
import { Button } from '@/components/components/Button'

import React from 'react';
import * as CardPrimitive from '@radix-ui/react-card';
import * as ProgressPrimitive from '@radix-ui/themes';
import { styled } from '@stitches/react';

// Styled components using stitches
const Flex = styled('div', { display: 'flex' });
const Box = styled('div', {});

const Card = styled(CardPrimitive.Root, {
  padding: '1rem',
  borderRadius: '6px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
});

const CardTitle = styled('h2', {
  margin: 0,
  fontSize: '1rem',
  color: 'white',
});

const CardValue = styled('div', {
  fontSize: '2rem',
  color: 'white',
});

const ProgressBar = styled(ProgressPrimitive.Root, {
  height: '10px',
  borderRadius: '9999px',
  backgroundColor: 'lightgrey',
});

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: 'green',
  borderRadius: '9999px',
  height: '100%',
});

// The example component structure
const page = () => {
  return (
    <Box css={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Flex css={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h1>Overview</h1>
        <button>Edit</button>
      </Flex>

      <Flex css={{ gap: '1rem', marginBottom: '2rem' }}>
        <Card css={{ backgroundColor: '#4CAF50' }}>
          <CardTitle>Vehicles</CardTitle>
          <CardValue>5</CardValue>
        </Card>

        <Card css={{ backgroundColor: '#8A2BE2' }}>
          <CardTitle>Scheduled Services</CardTitle>
          <CardValue>3</CardValue>
        </Card>

        <Card>
          <CardTitle>Documents</CardTitle>
          <CardValue>15</CardValue>
        </Card>

        <Card>
          <CardTitle>Completed Services</CardTitle>
          <CardValue>7</CardValue>
        </Card>
      </Flex>

      <Flex css={{ gap: '1rem' }}>
        <Box css={{ width: '60%' }}>
          <h2>Your profile is 77% complete</h2>
          <ProgressBar value={77} max={100}>
            <ProgressIndicator style={{ width: '77%' }} />
          </ProgressBar>
        </Box>

        <Box css={{ width: '40%', background: 'white', padding: '1rem', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2>Reminder</h2>
          {/* Reminder list items go here */}
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
