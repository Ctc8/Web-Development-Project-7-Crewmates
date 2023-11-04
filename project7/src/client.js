import { createClient } from '@supabase/supabase-js'

const URL = 'https://iquzshdlsvmkgwvpfntf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxdXpzaGRsc3Zta2d3dnBmbnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNDE2NDIsImV4cCI6MjAxNDYxNzY0Mn0.YvBZv1S8HuO7HMmcLjbbCUeT8oO-NyqjZt_1pgfy8EM'

export const supabase = createClient(URL, API_KEY)