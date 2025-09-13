'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from './lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import LatestBlogsSection from './homepage/LatestBlogsSection'

// Define the types for our data structures
interface Listing {
  id: string;
  businessName: string;
  location: string;
  price: string;
  revenue?: string;
  teaserDescription: string;
  isAiGenerated?: boolean;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  listings?: Listing[];
}

export default function DashPage() {
  return <div style={{ padding: 40, fontSize: 32 }}>DASH PAGE</div>;
} 