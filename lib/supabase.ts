import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aooeqwyauwvvezuulleq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvb2Vxd3lhdXd2dmV6dXVsbGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNDAzMTgsImV4cCI6MjA2MzYxNjMxOH0.yAwo312ulsbCd3LlfVKst7mIAZgcucM8luvL96XJNwo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 