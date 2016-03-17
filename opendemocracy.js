function Democracy(public_opinion, agenda_setting, resolution_preparation) {
  if ((public_opinion == "open") && (agenda_setting == "open") && (resolution_preparation == "open"))
    return true;
  else
    return false;
}
