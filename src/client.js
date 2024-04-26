
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bjcgznrajoeevbiccsju.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqY2d6bnJham9lZXZiaWNjc2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMDkxOTAsImV4cCI6MjAyOTY4NTE5MH0.GYEsjikYy1633EnyyEbp9xB_3TvBiEVhFbMoQ4jVwF0'
export const supabase = createClient(supabaseUrl, supabaseKey)