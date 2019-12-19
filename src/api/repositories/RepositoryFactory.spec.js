import RepositoryFactory from "./RepositoryFactory";
import EbooksRepository from "./EbooksRepository";

describe("RepositoryFactory", () => {
  it("should return the repository for the given resource name", () => {
    const ebooksRepository = RepositoryFactory.get("ebooks");
    expect(ebooksRepository).toBeDefined();
    expect(ebooksRepository).toEqual(EbooksRepository);
  });
});
