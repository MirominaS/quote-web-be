const current_date = new Date().toISOString()

/**
 * 
 * @name logger
 * @description Print logs with timestamp
 * @param {String} status 
 * @returns null
 */
export const logger = (status) => {
    console.log(`[${current_date}] :`, status)

}


/**
 * 
 */
export const errorlogger = (error_status) => {
    console.log(`[${current_date}] : `, error_status)
}