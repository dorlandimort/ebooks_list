const TimeHelper = {
  toHourAndMinutes(time) {
    const [hours, minutes] = time.split(':')
    return `${hours}h ${minutes}m`
  }
};

export default TimeHelper;
