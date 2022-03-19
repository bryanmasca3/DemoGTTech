module.exports={
    Plugins:{        
        tailwindcss:{},
        autoprefixer:{},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
}