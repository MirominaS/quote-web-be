const current_date = new Date().toISOString()
export const logger = (status) => {
    console.log(`[${current_date}] :`, status)

}

export const errorlogger = (error_status) => {
    console.log(`[${current_date}] : `, error_status)
}