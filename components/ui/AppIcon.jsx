import React from 'react'

const AppIcon = ({ icon, className }) => <span className={`mdi mdi-${icon}${className ? ` ${className}` : ''}`} />

export default AppIcon
