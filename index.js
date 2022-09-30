function Generate() {
    const list_candidates = []
    const list_roles = []
    const entries = document.querySelectorAll(".candinput")
    const roles = document.querySelectorAll(".numboxers")
    entries.forEach((number) => list_candidates.push(number.value))
    roles.forEach((names, index) => names.innerHTML = list_candidates[index])
}
