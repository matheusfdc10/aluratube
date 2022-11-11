import { createClient } from "@supabase/supabase-js"

// BANCO DE DADOS
const URL = "https://zcednlxbrbcxkxqhrjlw.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZWRubHhicmJjeGt4cWhyamx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzIwMzAsImV4cCI6MTk4Mzc0ODAzMH0.N8lbbZyT5t0YPqGIqJTrGn1hcO9qy37CoZVLNsQjI4w"
const supabase = createClient(URL, PUBLIC_KEY)


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*")
        },

        setVideo({title, url, thumb, playlist}) {
            return supabase.from("video").insert({
                title,
                url,
                thumb,
                playlist,
            })
        }
    }
}