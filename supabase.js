import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL || "https://omsvnabotgwfvgnnrgjq.supabase.co";
const supabaseKey =
  process.env.SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tc3ZuYWJvdGd3ZnZnbm5yZ2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2ODU0OTUsImV4cCI6MjA0MzI2MTQ5NX0.Z0kJ9MlN6Cjckp4TDcaleNdhnTXrduP8LlBKX7ifWbU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
