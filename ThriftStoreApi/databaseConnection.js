import { createClient as _createClient } from "@supabase/supabase-js";

const options = {
    db: {
        schema: "public",
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
    global: {
        headers: { "x-my-custom-header": "my-app-name" },
    },
};

export const supabase = _createClient(
    "https://bswksgbrjmlkzsozubvi.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzd2tzZ2Jyam1sa3pzb3p1YnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk0MDE0MDMsImV4cCI6MTk4NDk3NzQwM30.mQK19xJSbTDEOzWJKzLUJbJGI8WPvfqGUzvECxul3ck",
    options,
);