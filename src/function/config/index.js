require('dotenv').config();


let { createClient } = require('@supabase/supabase-js')

let supabaseUrl = process.env.REACT_APP_SUPABASE_URL
let supabaseKey = process.env.REACT_APP_SUPABASE_KEY 

export const supabase = createClient(supabaseUrl, supabaseKey)