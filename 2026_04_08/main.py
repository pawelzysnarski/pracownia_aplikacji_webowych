class Graf:
    def __init__(self, vertexs):
        self.vertexs = vertexs
        self.neighboursList = [[] for _ in range(vertexs)]
def read_graph(path):
    with open(path,'r',encoding="utf-8") as plik:
        vertexs = int(plik.readline().strip())
        graph = Graf(vertexs)
        for i in range (vertexs):
            line = plik.readline().split()
            neighbours = [int(x) for x in line[1:]]
            graph.neighboursList[i] = neighbours
        return graph
def write_neighbours_list(adjacencyList):
    for index, neighbors in enumerate(adjacencyList):
        neighboursString = ", ".join(map(str, neighbors))
        print(f"Sąsiadami wierzchołka {index} są: {neighboursString}")

def list_to_matrix(adjacencyList, vertexCount):
    matrix = [[0 for _ in range(vertexCount)] for _ in range(vertexCount)]
    for index, neighbours in enumerate(adjacencyList):
        for neighbour in neighbours:
            matrix[index][neighbour] = 1
    return matrix

def write_matrix(matrix):
    for row in matrix:
        print(" ".join(map(str, row)))

def main():
    filePath = "graph.txt"
    graph = read_graph(filePath)
    write_neighbours_list(graph.neighboursList)
    print()
    adjMatrix = list_to_matrix(graph.neighboursList, graph.vertexs)
    write_matrix(adjMatrix)

if __name__ == "__main__":
    main()
