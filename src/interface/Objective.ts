export default interface Objective {
    id: number,
    title: string
    goal: number,
    missing: number,
    lastHistory: number,
    objectives?: [Objective],
}